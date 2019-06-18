# Ruby and Sinatra

Holy smokes that was easy!

## Get started

Assuming you have Ruby and RubyGems on your machine or your cloud environment run:

```bash
gem install sinatra
```

Then, set up your server file by requiring `sinatra`:

**server.rb**

```ruby
require 'sinatra'
```

Then add a route!

**server.rb**

```ruby
require 'sinatra'

get '/' do
    'Welcome to you first Sinatra app!'
end
```

Next, use Ruby to run your file:

```bash
ruby server.rb
```

Visit `http://localhost:4567` and be amazed!
