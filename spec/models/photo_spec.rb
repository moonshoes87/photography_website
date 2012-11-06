require 'spec_helper'

describe Photo do
  it "should have title and url" do
    p = Photo.new
    p.should_not be_valid
  end

  it "should be valid with title and url" do
    p = Photo.new(title: "Title", url: "Url")
    p.should be_valid
  end

  it "should be responsive" do
    should respond_to(:title)
    should respond_to(:description)
    should respond_to(:url)
    should respond_to(:price)
  end
end
