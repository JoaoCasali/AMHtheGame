import pygame
from settings import *
from support import import_folder

class Player(pygame.sprite.Sprite):
    def __init__(self, pos, groups, obstacle_sprites) -> None:
        super().__init__(groups)
        # Import animations
        self.import_plater_assets()
        self.status = 'down' # tell what the player are doing
        self.frame_index = 0
        self.animations_speed = 0.15


        self.image = pygame.image.load('graphics/player/right/right_0.png').convert_alpha()
        self.rect = self.image.get_rect(topleft = pos)
        self.hitbox = self.rect.inflate(0, -10)

        # moviment variables
        self.direction = pygame.math.Vector2()
        self.speed = 5
        self.attacking = False

        # sprites which the player can collide
        self.obstacle_sprites = obstacle_sprites

    def import_plater_assets(self):
        character_path = "graphics/player/"
        self.animations = {'up': [], 'down': [], 'left': [], 'right': [],
                           'up_idle': [], 'down_idle': [], 'left_idle': [], 'right_idle': []}

        for animation in self.animations.keys():
            full_path = character_path + animation
            self.animations[animation] = import_folder(full_path)

    def input(self):
        if not self.attacking:
            keys = pygame.key.get_pressed()

            # detect if the player are moving to the sides
            if keys[pygame.K_a]: 
                self.direction.x = -1
                self.status = 'left'
            elif keys[pygame.K_d]: 
                self.direction.x = 1
                self.status = 'right'
            else: self.direction.x = 0

            # detect if the player are moving to up or down
            if keys[pygame.K_w]: 
                self.direction.y = -1
                self.status = 'up'
            elif keys[pygame.K_s]: 
                self.direction.y = 1
                self.status = 'down'
            else: self.direction.y = 0

    def get_status(self):
        # verify if the player are idle
        if self.direction.x == 0 and self.direction.y == 0:
            if not 'idle' in self.status and not 'attack' in self.status: # verify if the player was already idle
                self.status += '_idle' # change his stats

        if self.attacking:
            self.direction.x = 0
            self.direction.y = 0
            if not 'attack' in self.status:
                if 'idle' in self.status:
                    # overwrite idle
                    self.status = self.status.replace('_idle', '_attack')
                else: self.status += '_attack'
        else:
            if 'attack' in self.status:
                self.status = self.status.replace('_attack', '')

    def move(self, speed):
        if self.direction.magnitude() != 0: self.direction =self.direction.normalize()
        
        self.hitbox.x += self.direction.x * speed
        self.collision('horizontal')
        self.hitbox.y += self.direction.y * speed
        self.collision('vertical')
       
        self.rect.center = self.hitbox.center

    def collision(self, direction):
        if direction == 'horizontal': 
            for sprite in self.obstacle_sprites:
                if sprite.hitbox.colliderect(self.hitbox):
                    if self.direction.x > 0: # moving right
                        self.hitbox.right = sprite.hitbox.left
                    if self.direction.x < 0: # moving left
                        self.hitbox.left = sprite.hitbox.right

        if direction == 'vertical':
            for sprite in self.obstacle_sprites:
                if sprite.hitbox.colliderect(self.hitbox):
                    if self.direction.y > 0: # moving down
                        self.hitbox.bottom = sprite.hitbox.top
                    if self.direction.y < 0: # moving up
                        self.hitbox.top = sprite.hitbox.bottom

    def animate(self):
        animation = self.animations[self.status]

        # loop over tha frame index
        self.frame_index += self.animations_speed
        if self.frame_index > len(animation):
            self.frame_index = 0
        
        # set the image
        self.image = animation[int(self.frame_index)]
        self.rect = self.image.get_rect(center = self.hitbox.center)

    def update(self):
        self.input()
        self.get_status()
        self.animate()
        self.move(self.speed)