class PagesController < ApplicationController

  layout "first_page", :only => :entry
  #layout "application", :except => :entry

  def home
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
