class ContactErikMailer < ActionMailer::Base
  default from: "mintblue87@gmail.com"

  def email_erik(mail_hash)
    @from = mail_hash[:mail_sender]
    @subject = mail_hash[:mail_subject]
    @content = mail_hash[:mail_content]
    mail(:to => "zlotnika@gmail.com", :subject => "Email from #{@from}")
  end
end
