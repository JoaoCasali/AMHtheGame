import pygame, sys
from settings import *
from level import Level

# basic class to pygame
class Game:
    def __init__(self) -> None:
        # initializing the pygame
        pygame.init()
        # setting the screen size
        self.screen = pygame.display.set_mode((WIDTH, HEIGHT))
        # setting the screen's title
        pygame.display.set_caption('A Merlin History')
        # creating a clock to control FPS
        self.clock = pygame.time.Clock()

        self.level = Level()

    def run(self): # function which play open the screen
        while True:
            # for to detect if the user are clicking to close the screen 
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()
            # putting a black surface behind everything
            self.screen.fill('Black')
            # drawing the level
            self.level.run()
            pygame.display.update()
            # setting the maximum FPS
            self.clock.tick(FPS)

if __name__ == '__main__':
    game = Game()
    game.run()