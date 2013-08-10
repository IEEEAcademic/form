#!/usr/bin/python


import gdata.youtube
import gdata.youtube.service
import sys
import getopt

yt_service = gdata.youtube.service.YouTubeService()

# HTTPS/SSL access.
yt_service.ssl = True

def usage():
    print 'py [-t <comma separated title and description>] [-u <video_id>] [-s <video_id>] [-d <video_id>]'
    
def getPostURLAndToken(title, description, country):
    yt_service.developer_key = 'AI39si5GixYJDnXfJe9-1L51IbuZyYkq-QiPl7IxBaJdA6V90H3bJWAgHIeQcqP7Dw1Vh4H1T-hpF2LENKb9IAtwG4GcczvgqA' 
    yt_service.client_id = '998850102748.apps.googleusercontent.com' 
    
    # A complete client login request
    # yt_service.email = 'academic' + country + '@gmail.com'
    # yt_service.password = 'ieee' + country + '2013'

    yt_service.email = 'ieeexacademic@gmail.com'
    yt_service.password = 'ieeeacademic'

    # yt_service.source = 'xxxxxxxxxx'
    yt_service.ProgrammaticLogin()

    # create media group for private upload
    my_media_group = gdata.media.Group(
      title=gdata.media.Title(text=title),
      description=gdata.media.Description(description_type='plain',
                                          text=description),
      keywords=gdata.media.Keywords(text='travel, entertainment'),
      category=[gdata.media.Category(
          text='Travel',
          scheme='http://gdata.youtube.com/schemas/2007/categories.cat',
          label='Travel')],
      private=gdata.media.Private(),
      player=None
    )
    
    video_entry = gdata.youtube.YouTubeVideoEntry(media=my_media_group)    
    # upload meta data only
    response = yt_service.GetFormUploadToken(video_entry)
    return response

# parse response tuple and use the variables to build a form (see next code snippet)
#post_url = response[0]
#youtube_token = response[1]

#print post_url
#print youtube_token
def getVideoEntry(videoID):
    return yt_service.GetYouTubeVideoEntry(video_id=videoID)

def getUploadStatus(videoID):
    entry = getVideoEntry(videoID)
    upload_status = yt_service.CheckUploadStatus(entry)
    return upload_status

def deleteVideoEntry(videoID):
    entry = getVideoEntry(videoID)
    response = yt_service.DeleteVideoEntry(entry)
    if response:
        return True
    else:
        return False

def getVideoURL(videoID):
    entry = getVideoEntry(videoID)
    return entry.media.player.url

#videoID = 'J-g2pE95JD0'
#print getUploadStatus(videoID)

def main():
    try:
        opts, args = getopt.getopt(sys.argv[1:], "ht:u:s:d:", ["help"])
    except getopt.GetoptError:           
            usage()                          
            sys.exit(2)
            
    for opt, arg in opts:
        if opt in ("-h", "--help"):      
            usage()                                      
        elif opt == '-t':                
            arr = arg.split(',')
            resp = getPostURLAndToken(arr[0], arr[1], arr[2])
            print resp[0]+'::'+resp[1]        
        elif opt == '-u': 
             print getVideoURL(arg)
        elif opt == '-s':
            print getUploadStatus(arg)
        elif opt == '-d':
            print deleteVideoEntry(arg)

if __name__ == "__main__":
    main()
