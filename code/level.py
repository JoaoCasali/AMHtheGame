import pygame
from support import import_csv_layout, import_folder
from settings import *
from tile import Tile
from player import Player
from debug import debug

class Level():
    def __init__(self, selected_map = 2) -> None:
        # get the display surface
        self.display_surface = pygame.display.get_surface()
        self.selected_map = selected_map

        # sprite group setup
        self.visible_sprites = YSortCameraGroup(selected_map)
        self.obstacle_sprites = pygame.sprite.Group()
        self.create_map()

    def create_map(self):
        layouts = {
            'boundary': import_csv_layout(f'graphics/map/lvl{self.selected_map}/map._floorBlocks.csv'),
            'bushes': import_csv_layout(f'graphics/map/lvl{self.selected_map}/map._bushes.csv'),
            'objects': import_csv_layout(f'graphics/map/lvl{self.selected_map}/map._objects.csv'),
            'entities': import_csv_layout(f'graphics/map/lvl{self.selected_map}/map._antities.csv')
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
                        elif style == 'bushes':
                            bush = graphics['bushes'][int(col)]
                            Tile((x, y), [self.visible_sprites], 'bush', bush)
                        # objects that the player can't pass
                        elif style == 'objects':
                            object = graphics['objects'][int(col)]
                            Tile((x, y), [self.visible_sprites, self.obstacle_sprites], 'object', object)

                        elif style == 'entities':
                            self.player = Player((x,y), [self.visible_sprites], self.obstacle_sprites)

    def run(self):
        # update and draw the game
        self.visible_sprites.Custom_draw(self.player)
        self.visible_sprites.update()
        

class YSortCameraGroup(pygame.sprite.Group):
    def __init__(self, selected_map) -> None:
        # general setup
        super().__init__()
        self.display_surface = pygame.display.get_surface()
        self.half_width = self.display_surface.get_size()[0] // 2
        self.half_height = self.display_surface.get_size()[1] // 2
        self.offset = pygame.math.Vector2()
        self.selected_map = selected_map

        # creating the floor
        self.floor_surface = pygame.image.load(f'graphics/map/lvl{self.selected_map}/ground.png').convert()
        self.floor_rect = self.floor_surface.get_rect(topleft = (0,0))

    def stop_camera_by_offset(self, target):
        if target.rect.centerx - self.half_width < self.floor_rect.left:
            self.offset.x = 0  

        elif target.rect.centerx + self.half_width > self.floor_rect.right:
            self.offset.x = self.floor_rect.right - (self.half_width*2)

        else: self.offset.x = target.rect.centerx - self.half_width
        
        if target.rect.centery - self.half_height < self.floor_rect.top:
            self.offset.y = 0

        elif target.rect.centery + self.half_height > self.floor_rect.bottom:
            self.offset.y = self.floor_rect.bottom - (self.half_height*2)

        else: self.offset.y = target.rect.centery - self.half_height

    def Custom_draw(self, player):
        self.stop_camera_by_offset(player)

        # self.offset.x = player.rect.centerx - self.half_width
        # self.offset.y = player.rect.centery - self.half_height

        # getting the player position
        

        # drawing the floor
        floor_offset_pos = self.floor_rect.topleft - self.offset
        self.display_surface.blit(self.floor_surface, floor_offset_pos)

        # sort the sprites by the rectangle center, making the overlap effect
        # draw the sprites using a normal position + player position
        for sprite in sorted(self.sprites(), key= lambda sprite: sprite.rect.centery):
            offset_pos = sprite.rect.topleft - self.offset
            self.display_surface.blit(sprite.image, offset_pos)

        debug(self.offset)
        debug(self.floor_rect.right - (self.half_width*2), y= 40)