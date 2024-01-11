---
title: "AI-Powered GitHub Issue Deduplicator: Streamline Your Issue Management"
excerpt: "Discover my AI-driven GitHub Issue Deduplicator bot, leveraging OpenAI embeddings and Supabase to automatically detect and label duplicate issues, enhancing project management for developers and companies."
keywords: "GitHub Issue Deduplicator, AI GitHub Bot, OpenAI Embeddings, Supabase, Issue Management, Probot GitHub Apps, Duplicate Issue Detection, Streamline Development Workflow"
coverImage: '/assets/blog/repo-assistant-ai/cover.jpg'
date: '2024-01-07T05:35:07.322Z'
author:
  name: GuillermoScript
  picture: '/assets/blog/authors/hacker.jpg'
ogImage:
  url: '/assets/blog/repo-assistant-ai/cover.jpg'
timeToRead: 7
---

#  AI-Powered GitHub Issue Deduplicator: Streamline Your Issue Management

## TL;DR

The checkout the hole code go to the [GitHub repo](https://github.com/guillermoscript/repo-assistant). What I did is use Probot to create a GitHub app that uses OpenAI's API to generate embeddings of the issue text and then store them in a Supabase database. When a new issue is submitted, the bot: check if this is a duplicate or not and if it is, it will label it as a duplicate and add a comment linking to the original issue. If it is not a duplicate, it will add a comment saying that it is not a duplicate and add the correct labels if they were not added in the first place. If you want to know more about the code, keep reading.

## Simplifying Issue Management with AI

Managing a busy GitHub repository can be overwhelming, especially when it comes to tracking and handling duplicate issues. As your project grows, the influx of issues can lead to clutter and confusion, ultimately slowing down your development process. That's why we've developed an innovative solution - **The GitHub Issue Deduplicator** - a Probot-based GitHub app powered by the latest advancements in AI from OpenAI embeddings and the robust database capabilities of Supabase.

## Why You Need the GitHub Issue Deduplicator

Duplicate issues not only waste valuable time but also scatter the conversation and efforts of your team. My tool is designed to:

- **Automatically detect duplicates**: As soon as a new issue is opened, the bot scans existing issues to find potential duplicates.
- **Streamline issue management**: By labeling duplicates, the bot helps maintainers focus on unique problems.
- **Improve response times**: Developers can address and resolve unique issues faster without sifting through redundancies.
- **Enhance collaboration**: Centralize discussion by pointing contributors to ongoing conversations in similar issues.

## How It Works

The GitHub Issue Deduplicator uses state-of-the-art machine learning models to generate embeddings of issue texts, which are then stored in a Supabase database. When a new issue is submitted, the bot:

1. **Generates an embedding** for the new issue using OpenAI's powerful language models.
2. **Queries the Supabase database** for similar embeddings.
3. **Evaluates the similarity** of the new issue to existing ones based on a custom threshold.
4. **Labels the issue** as a duplicate if it meets the similarity criteria, and adds a comment linking to the original issue.
5. **Informs the issuer** with a comment if no duplicates are found, assuring that their issue will be addressed promptly and adding correct labels if labels were not added in the first place.

## Get Started

Ready to enhance your project management and save time for what truly matters? Installing the GitHub Issue Deduplicator is simple:

1. Visit my [repo](https://github.com/guillermoscript/repo-assistant).
2. Follow the instructions from the readme
3. Enjoy the magic of the bot

And that's it! The bot will now assist you in keeping your issue tracker clean and organized.

# Now The Technical Gears Behind the GitHub Issue Deduplicator

The GitHub Issue Deduplicator isn't just a handy tool; it's a showcase of cutting-edge technology seamlessly working together to improve your development workflow. Let's unpack the technical wizardry that empowers this bot.

## Understanding Language Models and Embeddings

At the heart of the bot's duplicate detection capability lies the power of **Large Language Models (LLMs)**. These sophisticated AI models are trained on vast amounts of text data, enabling them to understand and generate human-like text. For the bot, I use **GPT (Generative Pre-trained Transformer)** models provided by OpenAI. These models can comprehend the context and content of GitHub issues to a remarkable extent.

### What is GPT?

GPT stands for **Generative Pre-trained Transformer**. As a state-of-the-art language processing AI, GPT can understand nuances in human language, making it ideal for tasks like translation, question-answering, and, in our case, detecting duplicate issues. I specifically use embeddings from the model, which are numerical representations of text that capture the semantic meaning.

## The Role of Embeddings in Issue Deduplication

Embeddings are the backbone of the duplicate detection. When an issue is created, the bot uses OpenAI to generate a **text embedding**—a high-dimensional vector that represents the textual content. This vector captures the essence of the issue in a form that can be compared mathematically.

## Vector Database and Retriever-Augmented Generation (RAG)

To store and compare these embeddings efficiently, I use a **vector database**. This is where **Supabase** comes into play, with the `pgvector` extension that specializes in handling vector operations. It enables us to store embeddings and perform similarity searches with lightning speed.

### What is RAG?

**Retriever-Augmented Generation (RAG)** is a methodology that combines the retrieval of relevant information (in our case, similar issue embeddings) and the generation of responses (such as automated comments). While I don't use RAG directly, the concept inspires our bot's workflow, where the retrieval of similar issues is followed by the generation of comments or labels.

## The `match_documents` Function: Heart of the Operation

The custom SQL function `match_documents` is where the magic happens. It takes the embedding of the new issue and searches the vector database for existing issues with similar embeddings. Here's what it does, step by step:

1. **Accepts the new issue embedding** as input along with filter parameters like labels.
2. **Calculates similarity scores** between the new embedding and stored embeddings using cosine similarity, a measure of vector closeness.
3. **Filters results** based on the similarity threshold and additional metadata criteria, like matching labels and repo id (so that same issues but from differnet repo is not taked in account)
4. **Returns the most similar issues** for further action by the bot.

## Suggestions for Enhancements

As technology evolves, so will the bot. Here are some potential enhancements we're considering:

- **Integration with more ML models**: Exploring other language models to improve understanding and response generation.
- **Guide the user to the docs on issue creation**: Exploring the option that if there is a doc in the repo, to show the user a link and details of the docs about it


## Conclusion: The Future of Issue Management

The GitHub Issue Deduplicator is more than just a bot; it's a glimpse into the future of automated project management. By harnessing the power of LLMs, vector databases, and smart SQL functions, we're paving the way for more intelligent and efficient workflows.

