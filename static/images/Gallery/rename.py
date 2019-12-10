import os
for num, filename in enumerate(os.listdir(os.getcwd()), start= 1):
    fname, ext = filename, ''
    if '.' in filename:
        fname, ext = filename.split('.')
    if ext != 'py':
        os.rename(filename,  '_%s' %num + '.' + 'jpg') 
