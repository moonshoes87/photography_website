require 'spec_helper'

describe Tag do
  it "should be responsive" do   
   should respond_to(:name)
   should respond_to(:description)
  end

  it "should require a name" do
    t = Tag.new
    t.should_not be_valid
  end

  it "should be valid with a name" do
    t = Tag.new(name: "Tag")
    t.should be_valid
  end
end
