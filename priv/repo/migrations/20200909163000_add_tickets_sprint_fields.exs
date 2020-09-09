defmodule BraccoPubSub.Repo.Migrations.AddTicketsSprintFields do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      add(:sprint_id, references(:sprint))
      add(:quotation, :integer)      
    end

    create index(:tickets, [:sprint_id])
  end
end
