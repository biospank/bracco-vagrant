defmodule BraccoPubSub.Repo.Migrations.AddJsonSettingsTickets do
  use Ecto.Migration

  def change do
    alter table(:profile_settings) do
      add :ticket, :json
    end
  end
end
