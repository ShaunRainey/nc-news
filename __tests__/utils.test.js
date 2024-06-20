const sortArticles = require("../src/Utilities/functions");

describe("tests the sort function", () => {
  test("sorts array by votes(asc)", () => {
    //arrange
    const input = [
        {
          "author": "grumpy19",
          "title": "The Notorious MSG’s Unlikely Formula For Success",
          "article_id": 34,
          "topic": "cooking",
          "created_at": "2020-11-22T11:13:00.000Z",
          "votes": 7,
          "article_img_url": "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
          "comment_count": 11
        },
        {
          "author": "tickle122",
          "title": "The battle for Node.js security has only begun",
          "article_id": 12,
          "topic": "coding",
          "created_at": "2020-11-15T13:25:00.000Z",
          "votes": 3,
          "article_img_url": "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700",
          "comment_count": 7
        },
        {
          "author": "grumpy19",
          "title": "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
          "article_id": 6,
          "topic": "coding",
          "created_at": "2020-11-11T15:09:00.000Z",
          "votes": 9,
          "article_img_url": "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700",
          "comment_count": 11
        },
        {
          "author": "jessjelly",
          "title": "Running a Node App",
          "article_id": 1,
          "topic": "coding",
          "created_at": "2020-11-07T06:03:00.000Z",
          "votes": 0,
          "article_img_url": "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
          "comment_count": 8
        }
    ]
    const output = [
        {
            "author": "jessjelly",
            "title": "Running a Node App",
            "article_id": 1,
            "topic": "coding",
            "created_at": "2020-11-07T06:03:00.000Z",
            "votes": 0,
            "article_img_url": "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
            "comment_count": 8
          },
        {
            "author": "tickle122",
            "title": "The battle for Node.js security has only begun",
            "article_id": 12,
            "topic": "coding",
            "created_at": "2020-11-15T13:25:00.000Z",
            "votes": 3,
            "article_img_url": "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700",
            "comment_count": 7
          },
        {
          "author": "grumpy19",
          "title": "The Notorious MSG’s Unlikely Formula For Success",
          "article_id": 34,
          "topic": "cooking",
          "created_at": "2020-11-22T11:13:00.000Z",
          "votes": 7,
          "article_img_url": "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
          "comment_count": 11
        },
        {
          "author": "grumpy19",
          "title": "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
          "article_id": 6,
          "topic": "coding",
          "created_at": "2020-11-11T15:09:00.000Z",
          "votes": 9,
          "article_img_url": "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700",
          "comment_count": 11
        }
    ]
    //act
    result = sortArticles(input, 'votes(asc)')
    //assert
    expect(result).toEqual(output)
  })
  test("sorts array by votes(desc)", () => {
    //arrange
    const input = [
      {
        "author": "grumpy19",
        "title": "The Notorious MSG’s Unlikely Formula For Success",
        "article_id": 34,
        "topic": "cooking",
        "created_at": "2020-11-22T11:13:00.000Z",
        "votes": 7,
        "article_img_url": "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
        "comment_count": 11
      },
      {
        "author": "tickle122",
        "title": "The battle for Node.js security has only begun",
        "article_id": 12,
        "topic": "coding",
        "created_at": "2020-11-15T13:25:00.000Z",
        "votes": 3,
        "article_img_url": "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700",
        "comment_count": 7
      },
      {
        "author": "grumpy19",
        "title": "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
        "article_id": 6,
        "topic": "coding",
        "created_at": "2020-11-11T15:09:00.000Z",
        "votes": 9,
        "article_img_url": "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700",
        "comment_count": 11
      },
      {
        "author": "jessjelly",
        "title": "Running a Node App",
        "article_id": 1,
        "topic": "coding",
        "created_at": "2020-11-07T06:03:00.000Z",
        "votes": 0,
        "article_img_url": "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
        "comment_count": 8
      }
    ]
    const output =  [
      {
        author: 'grumpy19',
        title: 'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
        article_id: 6,
        topic: 'coding',
        created_at: '2020-11-11T15:09:00.000Z',
        votes: 9,
        article_img_url: 'https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700',
        comment_count: 11
      },
      {
        author: 'grumpy19',
        title: 'The Notorious MSG’s Unlikely Formula For Success',
        article_id: 34,
        topic: 'cooking',
        created_at: '2020-11-22T11:13:00.000Z',
        votes: 7,
        article_img_url: 'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700',
        comment_count: 11
      },
      {
        author: 'tickle122',
        title: 'The battle for Node.js security has only begun',
        article_id: 12,
        topic: 'coding',
        created_at: '2020-11-15T13:25:00.000Z',
        votes: 3,
        article_img_url: 'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700',
        comment_count: 7
      },
      {
        author: 'jessjelly',
        title: 'Running a Node App',
        article_id: 1,
        topic: 'coding',
        created_at: '2020-11-07T06:03:00.000Z',
        votes: 0,
        article_img_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700',
        comment_count: 8
      }
    ]
    //act
    result = sortArticles(input, 'votes(desc)')
    //assert
    expect(result).toEqual(output)
  })
  test("sorts array by comment_count(asc)", () => {
    //arrange
    const input = [
      {
        "author": "grumpy19",
        "title": "The Notorious MSG’s Unlikely Formula For Success",
        "article_id": 34,
        "topic": "cooking",
        "created_at": "2020-11-22T11:13:00.000Z",
        "votes": 7,
        "article_img_url": "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
        "comment_count": 11
      },
      {
        "author": "tickle122",
        "title": "The battle for Node.js security has only begun",
        "article_id": 12,
        "topic": "coding",
        "created_at": "2020-11-15T13:25:00.000Z",
        "votes": 3,
        "article_img_url": "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700",
        "comment_count": 7
      },
      {
        "author": "grumpy19",
        "title": "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
        "article_id": 6,
        "topic": "coding",
        "created_at": "2020-11-11T15:09:00.000Z",
        "votes": 9,
        "article_img_url": "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700",
        "comment_count": 11
      },
      {
        "author": "jessjelly",
        "title": "Running a Node App",
        "article_id": 1,
        "topic": "coding",
        "created_at": "2020-11-07T06:03:00.000Z",
        "votes": 0,
        "article_img_url": "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
        "comment_count": 8
      }
    ]
    const output =  [
    {
      author: 'tickle122',
      title: 'The battle for Node.js security has only begun',
      article_id: 12,
      topic: 'coding',
      created_at: '2020-11-15T13:25:00.000Z',
      votes: 3,
      article_img_url: 'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700',
      comment_count: 7
    },
    {
      author: 'jessjelly',
      title: 'Running a Node App',
      article_id: 1,
      topic: 'coding',
      created_at: '2020-11-07T06:03:00.000Z',
      votes: 0,
      article_img_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700',
      comment_count: 8
    },
    {
      author: 'grumpy19',
      title: 'The Notorious MSG’s Unlikely Formula For Success',
      article_id: 34,
      topic: 'cooking',
      created_at: '2020-11-22T11:13:00.000Z',
      votes: 7,
      article_img_url: 'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700',
      comment_count: 11
    },
    {
      author: 'grumpy19',
      title: 'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
      article_id: 6,
      topic: 'coding',
      created_at: '2020-11-11T15:09:00.000Z',
      votes: 9,
      article_img_url: 'https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700',
      comment_count: 11
    }
    ]
    //act
    result = sortArticles(input, 'comment_count(asc)')
    //assert
    expect(result).toEqual(output)
    })
  test("sorts array by comment_count(desc)", () => {
    const input = [
      {
        "author": "grumpy19",
        "title": "The Notorious MSG’s Unlikely Formula For Success",
        "article_id": 34,
        "topic": "cooking",
        "created_at": "2020-11-22T11:13:00.000Z",
        "votes": 7,
        "article_img_url": "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
        "comment_count": 11
      },
      {
        "author": "tickle122",
        "title": "The battle for Node.js security has only begun",
        "article_id": 12,
        "topic": "coding",
        "created_at": "2020-11-15T13:25:00.000Z",
        "votes": 3,
        "article_img_url": "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700",
        "comment_count": 7
      },
      {
        "author": "grumpy19",
        "title": "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
        "article_id": 6,
        "topic": "coding",
        "created_at": "2020-11-11T15:09:00.000Z",
        "votes": 9,
        "article_img_url": "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700",
        "comment_count": 11
      },
      {
        "author": "jessjelly",
        "title": "Running a Node App",
        "article_id": 1,
        "topic": "coding",
        "created_at": "2020-11-07T06:03:00.000Z",
        "votes": 0,
        "article_img_url": "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
        "comment_count": 8
      }
    ]
    const output =  [
      {
        author: 'grumpy19',
        title: 'The Notorious MSG’s Unlikely Formula For Success',
        article_id: 34,
        topic: 'cooking',
        created_at: '2020-11-22T11:13:00.000Z',
        votes: 7,
        article_img_url: 'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700',
        comment_count: 11
      },
      {
        author: 'grumpy19',
        title: 'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
        article_id: 6,
        topic: 'coding',
        created_at: '2020-11-11T15:09:00.000Z',
        votes: 9,
        article_img_url: 'https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700',
        comment_count: 11
      },
      {
        author: 'jessjelly',
        title: 'Running a Node App',
        article_id: 1,
        topic: 'coding',
        created_at: '2020-11-07T06:03:00.000Z',
        votes: 0,
        article_img_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700',
        comment_count: 8
      },
      {
        author: 'tickle122',
        title: 'The battle for Node.js security has only begun',
        article_id: 12,
        topic: 'coding',
        created_at: '2020-11-15T13:25:00.000Z',
        votes: 3,
        article_img_url: 'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700',
        comment_count: 7
      }
    ]
    //act
    result = sortArticles(input, 'comment_count(desc)')
    //assert
    expect(result).toEqual(output)
  })
  test("sorts array by created_at(asc)", () => {
    const input = [
      {
        "author": "grumpy19",
        "title": "The Notorious MSG’s Unlikely Formula For Success",
        "article_id": 34,
        "topic": "cooking",
        "created_at": "2020-11-22T11:13:00.000Z",
        "votes": 7,
        "article_img_url": "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
        "comment_count": 11
      },
      {
        "author": "tickle122",
        "title": "The battle for Node.js security has only begun",
        "article_id": 12,
        "topic": "coding",
        "created_at": "2020-11-15T13:25:00.000Z",
        "votes": 3,
        "article_img_url": "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700",
        "comment_count": 7
      },
      {
        "author": "grumpy19",
        "title": "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
        "article_id": 6,
        "topic": "coding",
        "created_at": "2020-11-11T15:09:00.000Z",
        "votes": 9,
        "article_img_url": "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700",
        "comment_count": 11
      },
      {
        "author": "jessjelly",
        "title": "Running a Node App",
        "article_id": 1,
        "topic": "coding",
        "created_at": "2020-11-07T06:03:00.000Z",
        "votes": 0,
        "article_img_url": "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
        "comment_count": 8
      }
    ]
    const output =  [
      {
      author: 'jessjelly',
      title: 'Running a Node App',
      article_id: 1,
      topic: 'coding',
      created_at: '2020-11-07T06:03:00.000Z',
      votes: 0,
      article_img_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700',
      comment_count: 8
      },
      {
      author: 'grumpy19',
      title: 'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
      article_id: 6,
      topic: 'coding',
      created_at: '2020-11-11T15:09:00.000Z',
      votes: 9,
      article_img_url: 'https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700',
      comment_count: 11
      },
      {
      author: 'tickle122',
      title: 'The battle for Node.js security has only begun',
      article_id: 12,
      topic: 'coding',
      created_at: '2020-11-15T13:25:00.000Z',
      votes: 3,
      article_img_url: 'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700',
      comment_count: 7
      },
      {
      author: 'grumpy19',
      title: 'The Notorious MSG’s Unlikely Formula For Success',
      article_id: 34,
      topic: 'cooking',
      created_at: '2020-11-22T11:13:00.000Z',
      votes: 7,
      article_img_url: 'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700',
      comment_count: 11
      }
    ] 
    //act
    result = sortArticles(input, 'created_at(asc)')
    //assert
    expect(result).toEqual(output)
  })
  test("sorts array by comment_count(desc)", () => {
    const input = [
      {
      "author": "grumpy19",
      "title": "The Notorious MSG’s Unlikely Formula For Success",
      "article_id": 34,
      "topic": "cooking",
      "created_at": "2020-11-22T11:13:00.000Z",
      "votes": 7,
      "article_img_url": "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
      "comment_count": 11
      },
      {
      "author": "tickle122",
      "title": "The battle for Node.js security has only begun",
      "article_id": 12,
      "topic": "coding",
      "created_at": "2020-11-15T13:25:00.000Z",
      "votes": 3,
      "article_img_url": "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700",
      "comment_count": 7
      },
      {
      "author": "grumpy19",
      "title": "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
      "article_id": 6,
      "topic": "coding",
      "created_at": "2020-11-11T15:09:00.000Z",
      "votes": 9,
      "article_img_url": "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700",
      "comment_count": 11
      },
      {
      "author": "jessjelly",
      "title": "Running a Node App",
      "article_id": 1,
      "topic": "coding",
      "created_at": "2020-11-07T06:03:00.000Z",
      "votes": 0,
      "article_img_url": "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
      "comment_count": 8
      }
    ]
    const output =  [
      {
      author: 'grumpy19',
      title: 'The Notorious MSG’s Unlikely Formula For Success',
      article_id: 34,
      topic: 'cooking',
      created_at: '2020-11-22T11:13:00.000Z',
      votes: 7,
      article_img_url: 'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700',
      comment_count: 11
      },
      {
      author: 'tickle122',
      title: 'The battle for Node.js security has only begun',
      article_id: 12,
      topic: 'coding',
      created_at: '2020-11-15T13:25:00.000Z',
      votes: 3,
      article_img_url: 'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700',
      comment_count: 7
      },
      {
      author: 'grumpy19',
      title: 'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
      article_id: 6,
      topic: 'coding',
      created_at: '2020-11-11T15:09:00.000Z',
      votes: 9,
      article_img_url: 'https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700',
      comment_count: 11
      },
      {
      author: 'jessjelly',
      title: 'Running a Node App',
      article_id: 1,
      topic: 'coding',
      created_at: '2020-11-07T06:03:00.000Z',
      votes: 0,
      article_img_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700',
      comment_count: 8
      }
    ] 
    //act
    result = sortArticles(input, 'created_at(desc)')
    //assert
    expect(result).toEqual(output)
  })
  test("input is not mutated", () => {
    const input = [
      {
      "author": "grumpy19",
      "title": "The Notorious MSG’s Unlikely Formula For Success",
      "article_id": 34,
      "topic": "cooking",
      "created_at": "2020-11-22T11:13:00.000Z",
      "votes": 7,
      "article_img_url": "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
      "comment_count": 11
      },
      {
      "author": "tickle122",
      "title": "The battle for Node.js security has only begun",
      "article_id": 12,
      "topic": "coding",
      "created_at": "2020-11-15T13:25:00.000Z",
      "votes": 3,
      "article_img_url": "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700",
      "comment_count": 7
      },
      {
      "author": "grumpy19",
      "title": "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
      "article_id": 6,
      "topic": "coding",
      "created_at": "2020-11-11T15:09:00.000Z",
      "votes": 9,
      "article_img_url": "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700",
      "comment_count": 11
      },
      {
      "author": "jessjelly",
      "title": "Running a Node App",
      "article_id": 1,
      "topic": "coding",
      "created_at": "2020-11-07T06:03:00.000Z",
      "votes": 0,
      "article_img_url": "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
      "comment_count": 8
      }
    ]

    const result1 = sortArticles(input, "votes(asc)")
    const result2 = sortArticles(input, "votes(desc)")
    const result3 = sortArticles(input, "comment_count(asc)")
    const result4 = sortArticles(input, "comment_count(desc)")
    const result5 = sortArticles(input, "created_at(asc)")
    const result6 = sortArticles(input, "created_at(desc)")

    expect(result1).not.toBe(input)
    expect(result2).not.toBe(input)
    expect(result3).not.toBe(input)
    expect(result4).not.toBe(input)
    expect(result5).not.toBe(input)
    expect(result6).not.toBe(input)
  })
})
