defmodule BraccoPubSub.Repo.Migrations.AlterAddressbookUpdateAt do
  use Ecto.Migration

  def change do
    alter table(:addressbook) do
      add(:updated_at, :timestamp, default: fragment("now()"))
      add(:updated_by, references(:accounts))
    end

    create index(:addressbook, [:updated_by])
  end
end
