import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';
import * as v from 'class-validator';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  @v.IsEmail()
  @v.IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @v.IsString()
  @v.IsNotEmpty()
  name: string;

  @Prop({
    required: true,
  })
  @v.IsString()
  @v.IsNotEmpty()
  password: string;

  @Prop()
  @v.IsString()
  imgUrl: string;

  readonly readOnlyData: { id: string; email: string; name: string };
}

export const CatSchema = SchemaFactory.createForClass(Cat);

CatSchema.virtual('readOnlyData').get(function (this: Cat) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
  };
});