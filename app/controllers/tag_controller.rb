class TagController < ApplicationController
  def index
  @tags = Tag.all
  end

  def new
  @tag = Tag.new
  end

  def edit
  @tag = Tag.find(params[:id])
  end

  def show
  @tag = Tag.find(params[:id])
  end

  def update
 
  end

  def destroy
  @tag = Tag.find(params[:id])
  @tag.destroy
  end
end
