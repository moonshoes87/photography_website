class PagesController < ApplicationController

  layout "first_page", :only => [:entry, :about]
# (this doesn't work)  javascript "full_page", :only => [:entry, :about]
  #layout "application", :except => [:entry, :about]

  def home
  @photos = Photo.all
  end

  def about
  @photos = Photo.all
  end

  def contact
  @photos = Photo.all
  end

  def entry
  end

end
