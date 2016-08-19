ENV['RACK_ENV'] = 'test'

require './app'
require 'rspec'
require 'rack/test'
require './ruby_models/notes'


describe 'NoteGoat' do
  include Rack::Test::Methods

  def app
    NoteGoat
  end

  it 'says hello' do
    get '/'
    expect(last_response).to be_ok
    expect(last_response.body).to eq('Hello world!')
  end

  it 'returns a JSON of all notes' do
    note = "this is a note"
    Note.create(content: note)
    get '/notes'
    expect(last_response).to be_ok
    expect(last_response.body).to include('this is a note')
    expect(last_response.header['Content-Type']).to include 'application/json'
  end

  it 'returns an individual note by id' do
    note = "this is a note"
    Note.create(content: note)
    get '/notes/2'
    expect(last_response).to be_ok
    expect(last_response.body).to include('this is a note')
    expect(last_response.header['Content-Type']).to include 'application/json'
  end

  it 'posts a note to database' do
    post '/notes?content=note1'
    expect(last_response).to be_ok
    expect(Note.count).to eq(1)
  end

end
