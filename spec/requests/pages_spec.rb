require 'spec_helper'

describe "Pages" do

  describe "Home page" do
    it "should have content photography" do
      visit '/pages/home'
      page.should have_selector('h1', text: 'Photography Website')
    end
  end

  describe "About page" do
  
    it "should have content 'about'" do
      visit '/pages/about'
      page.should have_content('About Eric')
    end
  end

  describe "Contact page" do

    it "should have content 'Contact me'" do
      visit '/pages/contact'
      page.should have_content('Contact me')
    end
  end
end
  