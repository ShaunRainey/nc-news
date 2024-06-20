const sortArticles = require("../src/Utilities/functions");

describe("tests the sort function", () => {
  test("Returns articles unaffected if unsorted is selected",()=>{
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
  const result = sortArticles(input, 'unsorted')
  expect(result).toEqual(input)
  })
  test("sorts array by Number of votes (least)", () => {
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
    result = sortArticles(input, 'Number of votes (least)')
    //assert
    expect(result).toEqual(output)
  })
  test("sorts array by Number of votes (most)", () => {
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
    result = sortArticles(input, 'Number of votes (most)')
    //assert
    expect(result).toEqual(output)
  })
  test("sorts array by Number of comments (least)", () => {
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
    result = sortArticles(input, 'Number of comments (least)')
    //assert
    expect(result).toEqual(output)
    })
  test("sorts array by Number of comments (most)", () => {
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
    result = sortArticles(input, 'Number of comments (most)')
    //assert
    expect(result).toEqual(output)
  })
  test("sorts array by Date created (oldest)", () => {
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
    result = sortArticles(input, 'Date created (oldest)')
    //assert
    expect(result).toEqual(output)
  })
  test("sorts array by Date created (newest)", () => {
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
    result = sortArticles(input, 'Date created (newest)')
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

    const result1 = sortArticles(input, "Number of votes (least)")
    const result2 = sortArticles(input, "Number of votes (most)")
    const result3 = sortArticles(input, "Number of comments (least)")
    const result4 = sortArticles(input, "Number of comments (most)")
    const result5 = sortArticles(input, "Date created (oldest)")
    const result6 = sortArticles(input, "Date created (newest)")

    expect(result1).not.toBe(input)
    expect(result2).not.toBe(input)
    expect(result3).not.toBe(input)
    expect(result4).not.toBe(input)
    expect(result5).not.toBe(input)
    expect(result6).not.toBe(input)
  })
})
