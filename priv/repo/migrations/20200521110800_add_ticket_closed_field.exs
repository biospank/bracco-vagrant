defmodule BraccoPubSub.Repo.Migrations.AddTicketClosedField do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      add(:closed, :timestamp)
    end
  end
end
