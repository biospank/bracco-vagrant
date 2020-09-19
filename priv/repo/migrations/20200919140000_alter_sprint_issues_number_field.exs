defmodule BraccoPubSub.Repo.Migrations.AlterSprintIssuesNumberField do
  use Ecto.Migration

  def change do
    alter table(:sprint) do
      modify(:issues_number, :integer, default: 0)
    end  
  end
end