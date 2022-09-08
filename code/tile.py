import pygame
from settings import *

class Tile(pygame.sprite.Sprite):
    def __init__(self, pos, groups, sprite_type, surface = pygame.Surface((TILESIZE, TILESIZE))):
        super().__init__(groups)
        # what the sprite gonna be in the game (invisible, visible)
        self.sprite_type = sprite_type
        self.image = surface
        if self.sprite_type == 'object':
            # adjusting the offset for the sprites bigger than 64 pixels
            adjust = (self.image.get_height()/TILESIZE) - 1 
            self.rect = self.image.get_rect(topleft = (pos[0],pos[1] - (TILESIZE * adjust))) 
            self.hitbox = self.rect.inflate(-self.image.get_width()/2, -self.image.get_height()/2)
        elif self.sprite_type == 'invisible':
            self.rect = self.image.get_rect(topleft = pos)
            self.hitbox = self.rect.inflate(-10, -20)
        else:
            self.rect = self.image.get_rect(topleft = pos)
            self.hitbox = self.rect.inflate(-10, -10)