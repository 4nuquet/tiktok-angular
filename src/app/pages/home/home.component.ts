import { Component, OnInit } from '@angular/core';
import { PostsService, SinglePost } from 'src/app/services/posts.service';
import { SuggestionsCharacters, SuggestionService } from 'src/app/services/suggestion.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: SinglePost[] = [];
  constructor(    private postsService: PostsService, private suggestionService: SuggestionService) { }

  ngOnInit(): void {
    this.getAllPosts()
    this.getSingleCharacter()

  }

  getAllPosts(){
    this.postsService.getAllPosts().subscribe(res =>{
      this.posts = res.posts
      console.log(this.posts)
    })
  }

  getSingleCharacter(id: number = 1){
    this.suggestionService.getSingleCharacter(id).subscribe(res =>{
      console.log(res)
    });
  }


}
