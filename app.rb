require 'sinatra'
require 'sinatra/base'
# require 'sinatra/json'

# require_relative 'ruby_models/notes'


class NoteGoat < Sinatra::Base

  get '/' do
    'Hello world!'
  end

  post '/notes' do
    note = {:content => params[:content]}
    Note.create(content: note.to_json)
  end

  get '/notes' do
    @all_notes = Note.all
    @all_notes.to_json
  end

  get '/notes/:id' do
    @note = Note.get(params[:id])
    @note.to_json
  end

  run! if app_file == $0

end
