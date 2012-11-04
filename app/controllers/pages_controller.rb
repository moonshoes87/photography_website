class PagesController < ApplicationController

  layout "first_page", :only => :entry
  #layout "application", :except => :entry

  def home
  end

  def about
  end

  def contact
  end

  def entry
  end

end
