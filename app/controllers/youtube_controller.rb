#
#
#

class YoutubeController < ApplicationController
   
  def uploadToken

    #cmd = Rails.root.to_s + '/public/scripts/upload_video.py'

    #resp = `#{cmd} --file="/home/joao/Desktop/IMG_0060.MOV"`


    cmd = Rails.root.to_s + '/public/scripts/youtubeUtilAPIs.py'

    title = params['titleBox']
    description = params['descripBox']
    country = params['countryBox']
    resp = `#{cmd} -t "#{title},#{description},#{country}"`
    
    puts resp

    resp = resp.split('::')
    response = (resp.length == 2) ? {:uploadUrl => resp[0], :token => resp[1]} : ""
    respond_to do |format|
      format.js {render :js => response.to_json}
    end
  end
end
