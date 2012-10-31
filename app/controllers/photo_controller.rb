class PhotoController < ApplicationController
  def index
  @photos = Photo.all

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
