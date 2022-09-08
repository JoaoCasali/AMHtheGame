import pygame
from support import import_csv_layout, import_folder
from settings import *
from tile import Tile
from player import Player
from debug import debug
from random import choice

class Level():
    def __init__(self) -> None:
        # get the display surface
        self.display_surface = pygame.display.get_surface()

        # sprite group setup
        self.visible_sprites = YSortCameraGroup()
        self.obstacle_sprites = pygame.sprite.Group()
        self.create_map()

    def create_map(self):
        layouts = {
            'boundary': import_csv_layout('graphics/map/lvl1/map._floorBlocks.csv'),
            'bushes': import_csv_layout('graphics/map/lvl1/map._bushes.csv'),
            'objects': import_csv_layout('graphics/map/lvl1/map._objects.csv')
        }
        graphics = {
            'bushes': import_folder('graphics/bushes'),
            'objects': import_folder('graphics/objects')
        }
        # walk in the layers of the map
        # style = type of layer - layout = where the tile stay
        for style, layout in layouts.items():
            for row_index, row in enumerate(layout):
                for col_index, col in enumerate(row):
                    if col != '-1':
                        # find the tiles' position
                        x = col_index * TILESIZE
                        y = row_index * TILESIZE

                        # delimits where the player can pass
                        if style == 'boundary':
                            Tile((x, y), [self.obstacle_sprites], 'invisible')
                        # details that the player can walk on top
                        if style == 'bushes':
                            random_bush_image = choice(graphics['bushes'])
                            Tile((x, y), [self.visible_sprites], 'bush', random_bush_image)
                        # objects that the player can't pass
                        if style == 'objects':
                            surf = graphics['objects'][int(col)]
                            Tile((x, y), [self.visible_sprites, self.obstacle_sprites], 'object', surf)

        self.player = Player((400,300), [self.visible_sprites], self.obstacle_sprites)
    def run(self):
        # update and draw the game
        self.visible_sprites.Custom_draw(self.player)
        self.visible_sprites.update()
        debug(self.player.status)

class YSortCameraGroup(pygame.sprite.Group):
    def __init__(self) -> None:
        # general setup
        super().__init__()
        self.display_surface = pygame.display.get_surface()
        self.half_width = self.display_surface.get_size()[0] // 2
        self.half_height = self.display_surface.get_size()[1] // 2
        self.offset = pygame.math.Vector2()

        # creating the floor
        self.floor_surface = pygame.image.load('graphics/tilemap/ground.png').convert()
        self.floor_rect = self.floor_surface.get_rect(topleft = (0,0))

    def Custom_draw(self, player):
        # getting the player position
        self.offset.x = player.rect.centerx - self.half_width
        self.offset.y = player.rect.centery - self.half_height

        # drawing the floor
        floor_offset_pos = self.floor_rect.topleft - self.offset
        self.display_surface.blit(self.floor_surface, floor_offset_pos)

        # draw the sprites using a normal position + player position
        for sprite in sorted(self.sprites(), key= lambda sprite: sprite.rect.centery):
            offset_pos = sprite.rect.topleft - self.offset
            self.display_surface.blit(sprite.image, offset_pos)