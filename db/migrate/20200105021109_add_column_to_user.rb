class AddColumnToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :token_expire, :datetime
  end
end
