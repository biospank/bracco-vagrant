defmodule BraccoPubSub.Repo.Migrations.AddProfileSettingsFields do
  use Ecto.Migration

  def change do
    alter table(:profile_settings) do
      add(:tickets_sound_notifications, :boolean, default: true)
      add(:tickets_flash_notifications, :boolean, default: true)
    end
  end
end
