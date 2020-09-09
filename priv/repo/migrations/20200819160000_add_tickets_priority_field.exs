defmodule BraccoPubSub.Repo.Migrations.AddTicketsPriorityField do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      add(:priority, :string)
    end
  end
end
