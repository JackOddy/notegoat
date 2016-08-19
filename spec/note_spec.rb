require './ruby_models/notes'

describe Note do

  before(:each) do
    Note.create(content: "this is our first note")
  end

  it 'saves a note to the database' do
    expect(Note.count).to eq(1)
  end

  it 'can retrieve a specific note by a given id' do
    note = Note.get(5)
    expect(note.id).to eq(5)
  end

  it 'can create multiple notes in the database' do
      Note.create(content: "this is another note")
    expect(Note.count).to eq(2)
  end

  it 'can retrieve all notes' do
    Note.create(content: "this is another note")
    expect(Note.all.to_s).to match('[<Note @id=8 @content=<not loaded>>, #<Note @id=9 @content=<not loaded>>]')
  end
end
