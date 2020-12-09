defmodule BraccoPubSub.Repo.Migrations.AlterAccountsResetToken do
  use Ecto.Migration

  def change do
    alter table(:accounts) do
      add(:reset_token, :string)
    end
  end
end
