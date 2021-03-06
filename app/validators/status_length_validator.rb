# frozen_string_literal: true

class StatusLengthValidator < ActiveModel::Validator
  MAX_CHARS = Rails.application.config.x.max_chars

  def validate(status)
    return unless status.local? && !status.reblog?
    status.errors.add(:text, I18n.t('statuses.over_character_limit', max: MAX_CHARS)) if [status.text, status.spoiler_text].join.length > MAX_CHARS
  end
end
