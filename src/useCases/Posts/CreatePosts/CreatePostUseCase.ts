import { IPostRepository } from '../../../repositories/interfaces/IPostRepository';

interface IRequest {
    title: string;
    content: string;
}

export class CreatePostUseCase {
    constructor(private postRepository: IPostRepository) {}
    execute({ title, content }: IRequest) {
        return this.postRepository.create({ title, content });
    }
}
