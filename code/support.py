from os import walk
import pygame


def import_folder(path):
    surfaces_list = [] # blank list that will be filled by the sprites
    # for to get the itens in the folder
    for _,__,img_files in walk(path):
        for image in img_files: # separating the items in the list of itens in the folder
            full_path = path + '/' + image # creating a full path to import
            image_surf = pygame.image.load(full_path).convert_alpha() # transforming in a pygame object
            surfaces_list.append(image_surf)

    return surfaces_list # returning the list with the sprites