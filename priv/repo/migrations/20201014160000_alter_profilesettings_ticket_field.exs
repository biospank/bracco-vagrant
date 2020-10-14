defmodule BraccoPubSub.Repo.Migrations.AlterProfilesettingsTicketField do
  use Ecto.Migration

  def change do
    alter table(:profile_settings) do
      modify(:ticket, :json, default: "{query_default: false, query_items: {}}")
    end  
  end
end