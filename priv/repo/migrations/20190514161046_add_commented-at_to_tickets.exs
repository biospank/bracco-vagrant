defmodule BraccoPubSub.Repo.Migrations.AddCommentedatToTickets do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      add(:commented_at, :timestamp, default: fragment("now()"))
    end
  end
end
