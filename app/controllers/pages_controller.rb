class PagesController < ApplicationController

#  layout "first_page", :only => :entry
#  
#  should no longer need to use above

  def home
  @photos = Photo.all
  end

  def about
  @photos = Photo.all
  end

  def contact
  @photos = Photo.all
  end

  def email_erik
    if params[:mail_sender] != ''
    # should be?  ContactErikMailer.delay.email_erik(params)
      result= ContactErikMailer.email_erik(params).deliver
      render :text => "$('p#message_sent').text('Well done')"
    else
      render :text => "$('p#message_sent').text('Sorry, try again')"
    end
  end

  def entry
  @photos = Photo.all
  end

  def comissions
  @photos = Photo.all
  end

end
