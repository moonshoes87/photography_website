class PagesController < ApplicationController

#  layout "first_page", :only => :entry

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
  @photos = Photo.all
  end

end
