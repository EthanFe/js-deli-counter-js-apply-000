
linePosition = 0;

function takeANumber(line){
  linePosition++;
  line.push(linePosition);
  return "Welcome! You're ticket number #" + linePosition;
}

takeANumber(line) //  Welcome! You're ticket number #1 [1]
takeANumber(line) // Welcome! You're ticket number #2 [1,2]

nowServing(line) // [2]
nowServing(line) // []

takeANumber(line) // Welcome! You're ticket number #3 [3]

function takeANumber(line, name)
{
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line)
{
  if (line.length > 0)
    return "Currently serving " + line.shift() + "."
  else
    return "There is nobody waiting to be served!"
}

function currentLine(line)
{
  var lineText = "The line is currently: "
  if (line.length > 0)
  {
    for (var i = 0; i < line.length; i++)
    {
      if (i > 0)
        lineText += ", "
      lineText += (i + 1) + ". " + line[i]
    }
  }
  else
  {
    lineText = "The line is currently empty."
  }
  return lineText
}