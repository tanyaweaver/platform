#!/bin/bash

# echo 'starting...'
npm run build
# echo 'starting staticfile collection'
python /platform/src/manage.py collectstatic --noinput

echo $DATA_DIRECTORY
# whoami
mkdir /${DATA_DIRECTORY}
cp -r /platform/staticfiles /${DATA_DIRECTORY}/
ln -s /${DATA_DIRECTORY}/staticfiles /${DATA_DIRECTORY}/static

# ls -la /air
# echo 'all done!'
