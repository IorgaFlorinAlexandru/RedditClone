import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostType } from 'src/app/posts/common/enums/post.enums';

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {

  private formsMap: Map<PostType,FormGroup>;

  constructor(private formBuilder: FormBuilder) {
    this.formsMap = new Map<PostType,FormGroup>();
  }

  public getFormGroupByPostType(postType: PostType) : FormGroup {
    let submitFormGroup = this.formsMap.get(postType);
    if(submitFormGroup) return submitFormGroup; 

    switch(postType){
      case PostType.TEXT:
        submitFormGroup = this.createTextForm();
        break;
      case PostType.LINK:
        submitFormGroup = this.createLinkForm();
        break;
      case PostType.MEDIA:
        submitFormGroup = this.createMediaForm();
        break;
    }

    this.formsMap.set(postType,submitFormGroup);

    return submitFormGroup;
  }

  private createTextForm(): FormGroup {
    return this.formBuilder.group({ 
      title: new FormControl('', [Validators.required, Validators.maxLength(300)]),
      optionalText: new FormControl('')
    });
  }

  //TODO Create a url validator
  private createLinkForm(): FormGroup {
    return this.formBuilder.group({ 
      title: new FormControl('', [Validators.required, Validators.maxLength(300)]),
      link: new FormControl('', Validators.required)
    });
  }

  private createMediaForm(): FormGroup {
    return this.formBuilder.group({ 
      title: new FormControl('', [Validators.required, Validators.maxLength(300)]),
      mediaFile: new FormControl('',[Validators.required])
    });
  }

}
