require './ruby_models/notes'
require 'json'

describe Note do

  it 'saves a note to the database' do
    json_note = {:content => "this is our first note"}
    Note.create(content: json_note.to_json)
    expect(Note.count).to eq(1)
  end

  it 'can retrieve a specific note by a given id' do
    json_note = {:content => "this is our first note"}
    Note.create(content: json_note.to_json)
    note = Note.get(2)
    expect(note.id).to eq(2)
  end

  it 'can create a jsoned note in the database' do
    json_note = {:content => "this is a note"}
    Note.create(content: json_note.to_json)
    json_note2 = {:content => "this is another note"}
    Note.create(content: json_note2.to_json)
    expect(Note.count).to eq(2)
  end

  it 'can retrieve all jsoned notes' do
    json_note = {:content => "this is a note"}
    Note.create(content: json_note.to_json)
    json_note2 = {:content => "this is another note"}
    Note.create(content: json_note2.to_json)
    @all_notes = Note.all
  end
end
