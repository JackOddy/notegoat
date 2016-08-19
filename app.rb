ENV["RACK_ENV"] ||= "development"

require 'sinatra'
require 'sinatra/base'
require_relative './ruby_models/notes'


class NoteGoat < Sinatra::Base

  before do
    content_type :json
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end

  get '/' do
    'Hello world!'
  end

  post '/notes' do
    Note.create(content: params[:content])
  end

  get '/notes' do
    Note.all.to_json
  end

  get '/notes/:id' do
    Note.get(params[:id]).to_json
  end

  run! if app_file == $0

end
