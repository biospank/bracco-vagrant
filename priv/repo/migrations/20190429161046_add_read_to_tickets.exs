defmodule BraccoPubSub.Repo.Migrations.AddReadToNotes do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      add(:read_by, {:array, :integer}, default: [])
    end
  end
end
