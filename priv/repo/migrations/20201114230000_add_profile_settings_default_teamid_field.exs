defmodule BraccoPubSub.Repo.Migrations.AddProfileSettingsDefaultTeamidField do
  use Ecto.Migration

  def change do
    alter table(:profile_settings) do
      add(:default_team_id, :integer) 
    end
  end
end
