class User < ApplicationRecord
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end

  validates :email, uniqueness: true, allow_nil: true

  has_many :moves

  def phone_neat
    if self.phone
      self.phone.gsub(/(\d{3})(\d{3})(\d{4})/, "(\\1)-\\2-\\3")
    end
  end
end
