class PhotoController < ApplicationController

  def sorted
  @photos = Photo.all
  @tag = Tag.find(params[:id])
  end

  def index
  @photos = Photo.all rescue []
  end

  def new
  @photo = Photo.new
  end

  def edit
  @photo = Photo.find(params[:id])
  end

  def show
  @photo = Photo.find(params[:id])
  end

  def update

  end

  def destroy
  @photo = Photo.find(params[:id])
  @photo.destroy
  end
end
