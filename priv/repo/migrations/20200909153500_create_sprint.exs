defmodule BraccoPubSub.Repo.Migrations.CreateSprint do
  use Ecto.Migration

  def change do
    create table(:sprint) do
      add(:description, :string)          
      add(:tickets_ids, {:array, :integer}, default: [])      
      add(:created_at, :timestamp, default: fragment("now()"))
      add(:start_at, :timestamp)
      add(:end_at, :timestamp)
      add(:active, :boolean, default: false)
      add(:quotation, :integer)
      add(:issues_number, :integer)
      add(:closed_issues_number, :integer)
      add(:closed_issues_ids, {:array, :integer}, default: []) 
      add(:not_closed_issues_ids, {:array, :integer}, default: [])            
    end
  end
end
