---
title: "How to Use Whisper for long audio transcriptions"
excerpt: "Learn how to use Whisper to transcribe long audio files that exceed the 25min limit of the model without losing accuracy. Whisper is a free and open-source tool that leverages the power of AI to transcribe audio files."
keywords: "Whisper, Audio Transcription, Long Audio Transcription, OpenAI, Open-Source Transcription, Python Audio Transcription, Speech-to-Text, Audio Processing, AI Speech Recognition, Python Whisper API, Audio Segmentation, Free Speech-to-Text, Machine Learning, Deep Learning, Python Programming, Audio to Text Conversion, Automated Transcription, Large Audio Files, Podcast Transcription"
coverImage: '/assets/blog/how-to-use-whisper-for-transcriptions/cover.jpg'
date: '2024-01-10T05:35:07.322Z'
author:
  name: GuillermoScript
  picture: '/assets/blog/authors/hacker.jpg'
ogImage:
  url: '/assets/blog/how-to-use-whisper-for-transcriptions/cover.jpg'
timeToRead: 4
---

# How to Use Whisper for long audio transcriptions


## TL;DR

The checkout the hole code go to the [GitHub gist](https://gist.github.com/guillermoscript/c0682063097a7431e719f45337afa72a). What I did is just to wrap the code in a Flask app and add some logging to make it easier to understand, then i split the audio in chunks of 10 minutes and send them to OpenAI's Whisper API for transcription. Then use the proper API call to get the transcription and glue it together to get the full transcription of the audio file. If you want to know more about the code, keep reading.


## Simplifying Audio Processing and Transcription in Python

Welcome back to my blog, where we simplify complex technical processes into everyday language! Today, we'll be disentangling a powerful piece of Python code designed to split and transcribe audio files. Whether you're a developer or just curious about how these things work, let's dive in.


### Step 1: Setting the Stage
Our script begins by importing necessary Python libraries:

- **openai**: Allows us to integrate with OpenAI's API, which we'll use to transcribe our audio files.
- **mimetypes**: Helps determine the format of the files we're working with.
- **pydub**: A friendly library for manipulating audio.
- **os**: Lets us interact with the operating system.

We also load environment variables containing our secret keys like the OpenAI API key.

### Step 2: Flask to the Rescue
The entire operation is wrapped inside a Flask web application, Im no python expert, but I know Flask to be a quick way to build a simple API, so I used it here. Flask is a lightweight framework that helps us build web applications in Python. We establish a logging mechanism to track what happens as the app runs. The script starts by creating a Flask app and loading the OpenAI API key from the environment variables.

### Step 3: Creating the Endpoint
A route called `/split-audio` is our gateway. Here we can post our audio file to be processed. that way you can send the audio file to the endpoint and get the transcription back. The endpoint is a POST request that takes in an audio file and returns a JSON response with the transcription.

### Step 4: Taking in the Audio
A user uploads an audio file. We use the `mimetypes` library to figure out the file type because different audio types need different handling. This information helps `pydub` work correctly with the audio.

### Step 5: Audio Segmentation
Audio files can be long, potentially making transcription difficult. We aim to split the audio into chunks, starting with 10 minutes. Also, we're being cautious about file size; a maximum of 24MB is set to ensure we don't hit resource limits (OpenAI's API has a 25MB limit). If the file is too big, we halve the segment size and re-export.

### Step 6: The Splitting Loop
We calculate how many segments we'll need and start a loop. For each segment:

- We determine the start and end points in milliseconds.
- We slice the audio using `pydub`.
- We create a temporary file for the segment.
- If the file is too big (greater than 24MB), we halve the segment size and re-export.

### Step 7: Transcription Time
For each audio segment, we now call OpenAI's transcribe function using our previously loaded API key. The snippet demonstrates an intention to send the segments to OpenAI's Whisper API for transcription, but the actual API call might be wrapped within OpenAI's library.

### Step 8: Building the Result
As each piece is transcribed, we glue the text together to form the full transcription of the entire audio file.

### Step 9: Handling Errors
No one's perfect, not even code. If something goes awry, we catch it with a try-except block. The script logs an error message and returns it with a 400 status code, which tells the user that their request wasn't quite right.

### Step 10: Finishing Up
After all the looping, slicing, and transcribing, we return the full transcribed text as a neat JSON response.

### Conclusion
And there you have it—a robust Python solution for uploading, splitting, and transcribing audio into text. It integrates advanced services like OpenAI seamlessly in a web application that can be easily accessed through an API endpoint. This is powerful stuff, all manageable through coding magic!

Remember, there's always more to learn, and this is not an ultimate way of doing this, I can bet there are better ways and I will love to check those. If you're interested in learning more about the code, check out the [GitHub repo](https://gist.github.com/guillermoscript/c0682063097a7431e719f45337afa72a). If you have any questions, feel free to reach out to me on  [LinkedIn](https://www.linkedin.com/in/guillermo-marin-dev/). Happy coding!