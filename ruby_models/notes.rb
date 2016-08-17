require 'data_mapper'
require 'dm-postgres-adapter'

class Note
  include DataMapper::Resource

  property :id,       Serial
  property :content,  Text

end

DataMapper.setup(:default, "postgres://localhost/notegoat_development")
DataMapper.finalize
DataMapper.auto_upgrade!
